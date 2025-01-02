<template>
  useAsyncData with requestFetch
  <pre>{{ data }}</pre>
  <pre>{{ error }}</pre>
</template>

<script setup lang="ts">
  const requestFetch = useRequestFetch()
  const { data, error } = useAsyncData(
    'async_data_fetch',
    () => requestFetch('/api/hello')
  )
</script>