// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Redirige desde la raíz al idioma preferido
  if (context.url.pathname === "/") {
    const lang = context.preferredLocale || "es";
    return new Response(null, {
      status: 307,
      headers: { "Location": `/${lang}/` }
    });
  }
  
  return next();
});