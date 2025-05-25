-- CreateTable
CREATE TABLE "CatalogoCargo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "Escala" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Empleado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Empleado_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "CatalogoCargo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_ci_key" ON "Empleado"("ci");
