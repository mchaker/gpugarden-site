#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

async function* walk(dir) {
	for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
		const res = path.resolve(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walk(res);
		} else if (res.endsWith('.svelte') || res.endsWith('.html')) {
			yield res;
		}
	}
}

const offenders = [];
const relRegex = /<a\b[^>]*target=["']?_blank["']?[^>]*>/gi;
const hasRel = /rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/i;

for await (const file of walk(path.resolve('src'))) {
	const content = await fs.readFile(file, 'utf8');
	let match;
	while ((match = relRegex.exec(content)) !== null) {
		const tag = match[0];
		if (!hasRel.test(tag)) {
			const upto = content.slice(0, match.index);
			const line = upto.split(/\r?\n/).length;
			offenders.push({
				file: path.relative(process.cwd(), file),
				line,
				snippet: tag.slice(0, 200) + (tag.length > 200 ? '…' : '')
			});
		}
	}
}

if (offenders.length) {
	console.error('\nFound target="_blank" without rel="noopener noreferrer":');
	for (const o of offenders) {
		console.error(`- ${o.file}:${o.line} -> ${o.snippet}`);
	}
	process.exit(1);
} else {
	console.log('PASS: All target="_blank" links include rel="noopener noreferrer"');
}
