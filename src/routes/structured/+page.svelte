<script>
	import Span from '$lib/StructuredText/components/Span.svelte';
	import Quote from './QuoteRecord.svelte';
	import DocPageRecord from './DocPageRecord.svelte';
	import StructuredText from '$lib/StructuredText/StructuredText.svelte';
	import queryResult from './_query';
</script>

<StructuredText
	data={queryResult}
	components={{
		block: Span,
		QuoteRecord: Quote,
		DocPageRecord
	}}
/>
