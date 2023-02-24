-- CreateTable
CREATE TABLE "Equipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "EquipmentState" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "equipment_id" INTEGER NOT NULL,
    "valor1" INTEGER NOT NULL,
    "valor2" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EquipmentState_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "Equipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
