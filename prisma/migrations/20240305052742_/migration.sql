-- CreateTable
CREATE TABLE "Foods" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Foods_slug_key" ON "Foods"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Foods_creator_key" ON "Foods"("creator");
