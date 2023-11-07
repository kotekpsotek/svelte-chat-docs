# Preparation
Is the answer for question **How to use all installed in my app?**

## Add plugin to vite
```typescript
// vite.config.{js,ts}
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// Import plugin from module
import { svelteChatPlugin } from "@svelte-chat/plugin";

export default defineConfig({
	plugins: [sveltekit(), svelteChatPlugin()]
});
```

## Attach chat open button
```html
<!-- Route: /src/routes/+layout.svelte -->
<script>
    import { SvelteChatButton } from "@svelte-chat/gui";
</script>

<!-- Other stuff will be load here -->
<slot/>

<SvelteChatButton/>
```

### Recomendations:
When you would like to have fittest apperance experiences you should setup such style for app e.g: in `app.html` head scope
```css
    * {
        margin: 0px;
        padding: 0px
    }
```
