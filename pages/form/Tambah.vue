<template>
  <div class="container">
    <form id="tambah-artikel" @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label for="title">Judul Artikel</label>
        <input id="title" type="text" class="form-control"  name="title">
      </div>
      <div class="form-group">
        <label for="content">Example textarea</label>
        <textarea id="content" class="form-control" name="content" rows="3" ></textarea>
      </div>
      <!-- <div class="input-group mb-3">
        <input id="inputGroupFile02"  name="image" type="file" class="form-control" @change="upload()">
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
      </div> -->
      <button class="btn btn-primary" type="submit">Tambah Artikel</button>
    </form>
  </div>
</template>

<script>
// import httpClient from "~/utils/httpClient"
export default {
  data() {
    return {}
  },

  methods: {
    async onFormSubmit() {
      const dataForm = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
      }
        const response = await fetch("https://xjjeyccncvvwigqgsrrg.supabase.co/rest/v1/article",{
        method: "POST",
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqamV5Y2NuY3Z2d2lncWdzcnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzE3NjEsImV4cCI6MjAxMjA0Nzc2MX0.F2Kx403IhhG_8zQXshNnrXv5AM71DtTl2lnLEMBbEZ8",
          "Content-Type": "application/json",
          prefer: "return=representation",
        },
        body: JSON.stringify(dataForm)
      })
      // const response = await httpClient("/rest/v1/article", "POST", JSON.stringify(dataForm))
      const data =  await response?.json()
      this.$router.push(`/detail/${data[0]?.id}`)
    },
  }
}

// import { mapActions } from 'vuex'
// export default {
//     data() {
//         return {
//             formProduct: {
//                 title: '',
//                 content: '',
//             }
//         }
//     },
//     mounted() {
//         // this.setInitialUpload();
//     },
//     // computed: {
//     //     ...mapState('storage', ['images', 'image_product'])
//     // },
//     // beforeMount() {
//     //     this.$nextTick(function() {
//     //         /** Upload File */
//     //         const file = document.querySelector("input[type=file]");
//     //         const imageTempl = document.getElementById("image-template");
//     //         const empty = document.getElementById("empty");

//     //         // use to store pre selected files
//     //         const FILES = {};

//     //         // check if file is of type image and prepend the initialied
//     //         // template to the target element
//     //         function addFile(target, file) {
//     //             const isImage = file.type.match("image.*");
//     //                 const objectURL = URL.createObjectURL(file);

//     //             if(isImage) {
//     //                 const clone = imageTempl.cloneNode(true);
//     //                 clone.classList.remove('hidden');
//     //                 clone.querySelector("h1").textContent = file.name;
//     //                 clone.querySelector("li").id = objectURL;
//     //                 clone.querySelector(".delete").dataset.target = objectURL;
//     //                 clone.querySelector(".size").textContent =
//     //                     file.size > 1024
//     //                     ? file.size > 1048576
//     //                         ? Math.round(file.size / 1048576) + "mb"
//     //                         : Math.round(file.size / 1024) + "kb"
//     //                     : file.size + "b";

//     //                 isImage &&
//     //                     Object.assign(clone.querySelector("img"), {
//     //                     src: objectURL,
//     //                     alt: file.name
//     //                     });

//     //                 empty.classList.add("hidden");
//     //                 target.removeChild(target.firstChild);
//     //                 target.prepend(clone);

//     //                 FILES[objectURL] = file;
//     //             }
//     //         }
//     //         const gallery = document.getElementById("gallery");
//     //         const overlay = document.getElementById("overlay");

//     //         // click the hidden input of type file if the visible button is clicked
//     //         // and capture the selected files
//     //         const hidden = document.getElementById("hidden-input");
//     //         document.getElementById("button").onclick = () => hidden.click();
//     //         hidden.onchange = (e) => {
//     //         for (const file of e.target.files) {
//     //             addFile(gallery, file);
//     //         }
//     //         };

//     //         // use to check if a file is being dragged
//     //         const hasFiles = ({ dataTransfer: { types = [] } }) =>
//     //         types.includes("Files");

//     //         // use to drag dragenter and dragleave events.
//     //         // this is to know if the outermost parent is dragged over
//     //         // without issues due to drag events on its children
//     //         let counter = 0;

//     //         // reset counter and append file to gallery when file is dropped
//     //         function dropHandler(ev) {
//     //         ev.preventDefault();
//     //         for (const file of ev.dataTransfer.files) {
//     //             addFile(gallery, file);
//     //             overlay.classList.remove("draggedover");
//     //             counter = 0;
//     //         }
//     //         }

//     //         // only react to actual files being dragged
//     //         function dragEnterHandler(e) {
//     //         e.preventDefault();
//     //         if (!hasFiles(e)) {
//     //             return;
//     //         }
//     //         ++counter && overlay.classList.add("draggedover");
//     //         }

//     //         function dragLeaveHandler(e) {
//     //         --counter < 1 && overlay.classList.remove("draggedover");
//     //         }

//     //         function dragOverHandler(e) {
//     //         if (hasFiles(e)) {
//     //             e.preventDefault();
//     //         }
//     //         }

//     //         // event delegation to caputre delete events
//     //         // fron the waste buckets in the file preview cards
//     //         gallery.onclick = ({ target }) => {
//     //             if (target.classList.contains("delete")) {
//     //                 const ou = target.dataset.target;
//     //                 document.getElementById(ou).remove(ou);
//     //                 gallery.children.length === 1 && empty.classList.remove("hidden");
//     //                 delete FILES[ou];
//     //             }
//     //         };
//     //     });
//     // },
//     methods: {
//         ...mapActions('products', ['storeProduct']),
//         // ...mapActions('storage', ['uploadFile']),
//         async onSubmit() {
//             try {
//                 // const formData = new FormData();
//                 // const thumbnailFile = document.querySelector("input[type=file]");
//                 // formData.append('name', this.formProduct.name)
//                 // formData.append('description', this.formProduct.description)
//                 // formData.append('colors', this.formProduct.colors)
//                 // formData.append('price', this.formProduct.price)
//                 // formData.append('images_product', thumbnailFile.files[0].name)
//                 await this.storeProduct(this.formProduct);
//                 setTimeout(() => {
//                     this.$router.push("/products");
//                 }, 2000)
//             } catch (error) {
//                 console.error(error)
//             }
//         },
//         // async upload() {
//         //     try {
//         //         const formData = new FormData();
//         //         const file = document.querySelector("input[type=file]");
//         //         formData.append('data-binary', file.files[0]);
//         //         await this.uploadFile({ file: `/products/images/${Date.now()}.${file.files[0].name.split('.')[1]}`, body: formData })
//         //         this.formProduct.images_product.push(this.image_product)
//         //     } catch (error) {
//         //         console.error(error)
//         //     }
//         // }
//     }
// }

</script>
