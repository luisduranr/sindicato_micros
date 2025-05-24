-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "marca" TEXT,
    "modelo" TEXT,
    "anio" INTEGER,
    "placa" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "choferId" TEXT NOT NULL,
    CONSTRAINT "Vehiculo_choferId_fkey" FOREIGN KEY ("choferId") REFERENCES "Chofer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehiculo_placa_key" ON "Vehiculo"("placa");

-- CreateIndex
CREATE INDEX "Vehiculo_choferId_idx" ON "Vehiculo"("choferId");
