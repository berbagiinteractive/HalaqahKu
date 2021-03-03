<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-3/4 p-2">
      <Card>
        <div class="p-6">
          <p>Halaqah Aktif</p>
          <h1 class="text-3xl leading-none font-bold">3 Halaqah</h1>
        </div>
        <hr>
        <div class="p-6">
          <p class="text-sm">Tetap Semangat Selalu untuk meraih keutamaan menghafal Quran</p>
        </div>
      </Card>
      <Card class="p-6 mt-4">
        <h1 class="text-2xl font-bold">Halaqah</h1>
        <p class="text-gray-500">List grup halaqah mu</p>

        <div class="flex flex-wrap -mx-2 mt-4">
          <div class="p-2 w-full md:w-1/3">
            <HalaqahCard :content="halaqah[0]"/>
          </div>
          <div class="p-2 w-full md:w-1/3">
            <HalaqahCard :content="halaqah[1]"/>
          </div>
          <div class="p-2 w-full md:w-1/3">
            <HalaqahCard :content="halaqah[2]"/>
          </div>
        </div>
      </Card>

      <Card class="mt-4 p-6">
        <h1 class="text-xl font-bold">Perlu Bantuan</h1>
        <p class="text-sm text-gray-600">Perlu bantuan mengenai halaqah mu?</p>
        <div class="flex flex-wrap -mx-1 mt-3">
          <Button class="m-1">lihat panduan</Button>
          <Button class="m-1">tanyakan kesulitan</Button>
        </div>
      </Card>
    </div>
    <div class="w-full md:w-1/4 p-2">
      <ListCard :config="article.config" :list="article.data">
        <h1 class="text-2xl font-bold">Artikel</h1>
        <p class="text-sm text-gray-600">Artikel artikel insya Allah bermanfaat untuk kita semua</p>
      </ListCard>
      <ListCard class="mt-4" :config="article.config" :list="article.data">
        <h1 class="text-2xl font-bold">Fikih</h1>
        <p class="text-sm text-gray-600">Artikel artikel insya Allah bermanfaat untuk kita semua</p>
      </ListCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        config: {
          moreButton: true,
        },
        data: [
          {
            title: "Tips Menghafal Quran dari Syaikh Sulaiman Ar Ruhaili",
            tag: "new",
          },
          { title: "Harus ada hafalan baru setiap hari!", tag: "new" },
          { title: "Akhlak Penghafal Quran" },
        ],
      },
      halaqah : [
        {name : "Halaqah Sekolah", provider : "Ustadz Abdullah", status : "Hafalan, Murajaah, Mingguan"},
        {name : "Halaqah Sekolah", provider : "Ustadz Abdullah", status : "Hafalan, Murajaah, Mingguan"},
        {name : "Halaqah Sekolah", provider : "Ustadz Abdullah", status : "Hafalan, Murajaah, Mingguan"}
      ]
    };
  },
};
</script>

<style>
</style>