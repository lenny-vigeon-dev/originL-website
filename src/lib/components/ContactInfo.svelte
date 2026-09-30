<script lang="ts">
  interface Props {
    title: string;
    content: string;
    href?: string;
  }

  let { title, content, href = '/' }: Props = $props();
</script>

<div class="flex flex-col items-center text-center">
  <p>{title}</p>
  <a class="text-[var(--color3)] hover:text-[var(--color4)]" {href}>
    {content}
  </a>
</div>