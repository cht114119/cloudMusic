<template>
  <view class="index-wrap">
    <view class="top-search">
      <SearchModule :left-type="1" />
    </view>
  </view>
</template>

<script>
import SearchModule from 'components/searchModule/index.vue'
import SEARCH_DEFAULT from 'api/index.js'
import get from 'utils/ajax'
import Taro from '@tarojs/taro';
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Index',
    components: {
        SearchModule
    },
    onShow() {
        this.setIsFocus(true)

    },
    methods: {
      ...mapMutations({
            setIsFocus: 'search/setIsFocus'
        }),
        async getDefaultKeyword() {
            console.log('getDefaultKeyword');
            try {
                // const res = await get(SEARCH_DEFAULT)
                const res = await Taro.request({
                    url: 'http://127.0.0.1:3000/search/default',
                    method: 'GET'
                })
                console.log('getDefaultKeyword===>res', res);
            } catch (error) {
                // throw new Error(error)
                console.log(error);
            }
        }
    }
}
</script>

<style lang="scss" module>
.index-wrap {
    padding-left: 28px;
    display: flex;
    flex-direction: column;
}
</style>
