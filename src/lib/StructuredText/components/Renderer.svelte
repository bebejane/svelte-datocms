<script context="module" lang="ts">
	import type { ComponentsMap } from '../types';
	import Root from './Root.svelte';
	import Span from './Span.svelte';
	import {Heading} from './Heading';
	import Paragraph from './Paragraph.svelte';
	import List from './List.svelte';
	import Blockquote from './Blockquote.svelte';
	import Emphasis from './Emphasis.svelte';
	import Highlight from './Highlight.svelte';
	import Underline from './Underline.svelte';
	import Strong from './Strong.svelte';
	import Thematicbreak from './Themeaticbreak.svelte';
	import Strikethrough from './Strikethrough.svelte';
	import ListItem from './Listitem.svelte';
	import Link from './Link.svelte';
	import Code from './Code.svelte';

	const defaultMapping: ComponentsMap = {
		root: Root,
		span: Span,
		heading: Heading,
		list: List,
		blockquote: Blockquote,
		paragraph: Paragraph,
		emphasis: Emphasis,
		highlight: Highlight,
		strikethrough: Strikethrough,
		underline: Underline,
		strong: Strong,
		thematicBreak: Thematicbreak,
		link: Link,
		listItem: ListItem,
		code: Code
	};
</script>

<script lang="ts">
	import type { NodeType, Mark } from 'datocms-structured-text-utils';
	import { getContext as getComponentsContext } from '../components.context';
	export let type: NodeType | Mark;
	const components = getComponentsContext();
	$: component = $components[type] ? $components[type] : defaultMapping[type];
</script>

{#if component}
	<svelte:component this={component} {...$$restProps}>
		<slot />
	</svelte:component>
{/if}
