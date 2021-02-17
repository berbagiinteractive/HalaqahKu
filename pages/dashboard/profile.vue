<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-3/4 p-2">
      <Card class="p-6">
        <div class="flex flex-wrap items-center justify-between">
          <div>
            <div class="flex items-center">
              <h1 class="text-2xl font-bold">Nahl Munif Basalamah</h1>
              <Tag class="ml-1">pro</Tag>
            </div>
            <p class="text-gray-500">Status Kamu Disini!</p>
          </div>

          <div class="my-4 mb-0 md:mb-4">
            <Button>edit profile</Button>
            <Button>pengaturan</Button>
          </div>
        </div>
        <hr class="my-4 -mx-6" />
        <p class="text-gray-600 text-sm">
          nahlultra@gmail.com, Bergabung dengan HalaqahKu : 12 Maret 2020
        </p>
      </Card>

      <Card class="p-6 mt-4">
        <h1 class="text-2xl font-bold">Lencana Pencapaian</h1>
        <p class="text-gray-500">
          Lencana atas pencapaian yang kamu raih pada HalaqahKu
        </p>
        <hr class="my-6 -mx-6" />
        <ul class="flex">
          <li class="p-2">
            <img src="~/assets/images/badge/badge-1.png" alt="" />
          </li>
          <li class="p-2">
            <img src="~/assets/images/badge/badge-2.png" alt="" />
          </li>
          <li class="p-2">
            <img src="~/assets/images/badge/badge-3.png" alt="" />
          </li>
          <li class="p-2">
            <img src="~/assets/images/badge/badge-4.png" alt="" />
          </li>
          <li class="p-2">
            <img src="~/assets/images/badge/badge-5.png" alt="" />
          </li>
        </ul>
      </Card>

      <Card class="p-6 mt-4">
        <h1 class="text-2xl font-bold">Hafalan dan Murajaah pribadi</h1>
        <p class="text-gray-500">Rekap dari catatan hafalan dan murajaah mu</p>

        <div class="bg-white rounded-xl mt-4 p-4">
          <table class="table-auto w-full">
            <thead>
              <tr class="text-left">
                <th class="p-2 border">Tanggal</th>
                <th class="p-2 border">hafalan</th>
                <th class="p-2 border">murajaah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">1 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">2 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">3 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">4 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">5 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">6 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">7 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">8 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">9 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
               <tr>
                <td class="p-2 border">10 Rajab</td>
                <td class="p-2 border">Al Furqan 12 - 22</td>
                <td class="p-2 border">Al Furqan - Muhammad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
    <div class="w-full md:w-1/4 p-2">
      <ListCard class="" :config="article.config" :list="article.data">
        <h1 class="text-2xl font-bold">Tips & Trick</h1>
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
    }
  }
};
</script>

<style>
</style>