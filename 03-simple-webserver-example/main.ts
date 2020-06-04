// run with 
// deno run --allow-net 03-simple-webserver-example/main.ts 
import { serve } from 'https://deno.land/std/http/server.ts';
const s = serve({ port: 8000 })
console.log('http://localhost:8000/')
for await (const req of s) {
  req.respond({ body: 'Hello World\n' })
}