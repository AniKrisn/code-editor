import { examples } from '../examples'

// Examples to show in the sidebar (in display order)
const VISIBLE_EXAMPLES = ['Flower', 'Clock', 'Pool', 'Life', 'Sphere']

interface ExamplesSidebarProps {
	onLoadExample: (name: string, code: string) => void
	selectedExample: string | null
}

/**
 * Thin sidebar bar showing all available examples.
 * Always visible on the left side of the code panel.
 */
export function ExamplesSidebar({ onLoadExample, selectedExample }: ExamplesSidebarProps) {
	// Filter examples and preserve the order from VISIBLE_EXAMPLES
	const visibleExamples = VISIBLE_EXAMPLES.map(
		(name) => examples.find((e) => e.name === name)!
	).filter(Boolean)

	return (
		<div className="examples-sidebar">
			<div className="examples-sidebar-content">
				{visibleExamples.map((example) => (
					<button
						key={example.name}
						className={`examples-item ${example.name === selectedExample ? 'selected' : ''}`}
						onClick={() => onLoadExample(example.name, example.code)}
					>
						{example.name}
					</button>
				))}
			</div>
		</div>
	)
}
