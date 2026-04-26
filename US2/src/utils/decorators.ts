// ¿Qué es un decorador de método?
// Es una función que "envuelve" otro método para agregar
// comportamiento extra SIN modificar su código original.

export function withDefaults(
  _target: any,               // la clase (UserStore)
  _key: string,               // nombre del método ("create")
  descriptor: PropertyDescriptor  // contiene la función original
) {
  // Guardamos la función original antes de modificarla
  const originalMethod = descriptor.value;

  // Reemplazamos el método con una versión "mejorada"
  descriptor.value = function (...args: any[]) {
    const newUser = args[0]; // el objeto que llega a create()

    // Agregamos propiedades extra automáticamente ↓
    newUser.role      = newUser.role || "customer";
    newUser.createdAt = new Date().toISOString();
    newUser.isActive  = true;

    console.log("🎨 [Decorador] Propiedades agregadas:", {
      role: newUser.role,
      createdAt: newUser.createdAt,
      isActive: newUser.isActive,
    });

    // Ejecuta el método original con los datos ya enriquecidos
    return originalMethod.apply(this, args);
  };

  return descriptor;
}