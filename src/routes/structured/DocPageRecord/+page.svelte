<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	export let title = '';
	export let slug = '';
	// rest props used to receive meta attributes.
</script>

<a href={slug} {...$$restProps}><slot><span>{title}</span></slot></a>
