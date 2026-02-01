// Auto-generated index file for examples
// Each example is in its own file for better readability

import { code as flowerCode, name as flowerName } from './flower'
import { code as clockCode, name as clockName } from './clock'
import { code as poolCode, name as poolName } from './pool'
import { code as lifeCode, name as lifeName } from './life'
import { code as sphereCode, name as sphereName } from './sphere'

export interface Example {
	name: string
	code: string
}

export const examples: Example[] = [
	{ name: flowerName, code: flowerCode },
	{ name: clockName, code: clockCode },
	{ name: poolName, code: poolCode },
	{ name: lifeName, code: lifeCode },
	{ name: sphereName, code: sphereCode },
]

// Also export as a record for backwards compatibility
export const examplesRecord: Record<string, string> = Object.fromEntries(
	examples.map((e) => [e.name, e.code])
)

export const defaultCode = examples[0]?.code ?? ''
