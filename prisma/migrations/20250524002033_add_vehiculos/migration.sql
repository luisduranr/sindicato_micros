/*
  Warnings:

  - Made the column `anio` on table `Vehiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `marca` on table `Vehiculo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modelo` on table `Vehiculo` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehiculo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "placa" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "choferId" TEXT NOT NULL,
    CONSTRAINT "Vehiculo_choferId_fkey" FOREIGN KEY ("choferId") REFERENCES "Chofer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Vehiculo" ("anio", "choferId", "createdAt", "id", "marca", "modelo", "placa", "updatedAt") SELECT "anio", "choferId", "createdAt", "id", "marca", "modelo", "placa", "updatedAt" FROM "Vehiculo";
DROP TABLE "Vehiculo";
ALTER TABLE "new_Vehiculo" RENAME TO "Vehiculo";
CREATE UNIQUE INDEX "Vehiculo_placa_key" ON "Vehiculo"("placa");
CREATE INDEX "Vehiculo_choferId_idx" ON "Vehiculo"("choferId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
