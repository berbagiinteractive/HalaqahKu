<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-3/4 p-2">
      <Card class="p-6">
        <p class="text-gray-500">Assalamualaikum</p>
        <h1 class="text-4xl font-bold leading-none">Nahl Munif Basalamah</h1>
        <p class="text-gray-500 mt-1">Semangat selalu untuk menghafal Quran!</p>
        <Button class="mt-4">lihat profile</Button>
        <hr class="-mx-6 my-6" />
        <h1 class="text-2xl font-bold">Laporan Singkat Bulanan</h1>
        <p class="text-gray-500">
          Summary hafalan dan murajaahmu bulan Rajab 1442 Hijriah
        </p>

        <div class="flex flex-wrap items-stretch -mx-2">

          <div class="p-2 mt-2 w-full md:w-1/3">
            <Card class="p-4 bg-green-600 bg-opacity-100 h-full flex flex-col justify-between">
              <div class="text-white">
                <h1>Hafalan Bulan Ini</h1>
                <h2 class="text-xl font-bold">Tidak ada hafalan baru</h2>
              </div>
              <div>
                <hr class="-mx-4 my-4 border-green-700"/>
                <div class="flex justify-end">
                  <Button class="bg-green-700 text-white text-sm text-opacity-100">lihat data</Button>
                </div>
              </div>
            </Card>
          </div>

          <div class="p-2 mt-2 w-full md:w-1/3">
            <Card class="p-4 bg-yellow-600 bg-opacity-100 h-full flex flex-col justify-between">
              <div class="text-white">
                <h1>Total murajaah bulan ini</h1>
                <h2 class="text-xl font-bold">6 Juz / 24 Surah</h2>
              </div>
              <div>
                <hr class="-mx-4 my-4 border-yellow-700"/>
                <div class="flex justify-end">
                  <Button class="bg-yellow-700 text-white text-sm text-opacity-100">lihat data</Button>
                </div>
              </div>
            </Card>
          </div>

          <div class="p-2 mt-2 w-full md:w-1/3">
            <Card class="p-4 bg-blue-600 bg-opacity-100 h-full flex flex-col justify-between">
              <div class="text-white">
                <h1>Halaqah Aktif</h1>
                <h2 class="text-xl font-bold">3 Halaqah</h2>
              </div>
              <div>
                <hr class="-mx-4 my-4 border-blue-700"/>
                <div class="flex justify-end">
                  <Button class="bg-blue-700 text-white text-sm text-opacity-100">buka halaqah</Button>
                </div>
              </div>
            </Card>
          </div>

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

      <Card class="p-6 mt-4">
        <h1 class="text-2xl font-bold">Belajar Tajwid</h1>
        <p class="text-gray-500">Belajar Tajwid lengkap dengan HalaqahKu</p>

        <ul class="font-bold text-gray-600">
          <li>
            <hr class="-mx-6 my-4" />
            <p>Bab satu : Pengenalan Huruf</p>
          </li>
          <li>
            <hr class="-mx-6 my-4" />
            <p>Bab dua : Tempat keluar huruf</p>
          </li>
          <li>
            <hr class="-mx-6 my-4" />
            <p>Bab tiga : Hukum Hukum Tajwid</p>
          </li>
        </ul>
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
      article : {
        config : {
          moreButton : true
        },
        data : [
        {title : 'Tips Menghafal Quran dari Syaikh Sulaiman Ar Ruhaili', tag : 'new'},
        {title : 'Harus ada hafalan baru setiap hari!', tag : 'new'},
        {title : 'Akhlak Penghafal Quran'}
      ]
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