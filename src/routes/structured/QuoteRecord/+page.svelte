<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	export let quote = '';
	export let author = '';
</script>

<div class="flex flex-col max-w-xs border-2 border-gray-200 gap-4">
	<span class="font-extrabold text-xl">{quote}</span>
	<i class="font-serif text-lg text-right">{author}</i>
</div>
