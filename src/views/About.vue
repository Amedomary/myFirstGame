<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {

    // Быстрая сортировка, пузырьком
    // let counter = 0;
    // const arrName = [10, 919 , 0.2, -4, -53, -820, 0.13,5, 8, 1, 3, 717, 81, 28, 471, 2, 2, 2, 2, 167, 23, 123, 3,23 ,123, 3,213, 12,3,14,12,31,3,3,21,4,214,1, ,21,3,4,124,12,3, 1];
    // const qsort = (arr) => {
    //   if (arr.length < 2) {
    //     return arr;
    //   } else {
    //     const targetPoint = arr[Math.floor(Math.random() * arr.length)];
    //     const less = arr.filter(value => value < targetPoint);
    //     const bigest = arr.filter(value => value > targetPoint);
    //     counter = counter + 1;
    //     return [...qsort(less), targetPoint, ...qsort(bigest)];
    //   }
    // };

    // console.log(qsort(arrName), counter);
    
  }
};
</script>

