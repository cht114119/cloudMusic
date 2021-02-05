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
import commonAjax from 'utils/ajax'
import Taro from '@tarojs/taro';
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Index',
    components: {
        SearchModule
    },
    onShow() {
        this.setIsFocus(true)
        this.getDefaultKeyword()

    },
    methods: {
        ...mapMutations({
            setIsFocus: 'search/setIsFocus'
        }),
        async getDefaultKeyword() {
            console.log('get', commonAjax.get);
            console.log('getDefaultKeyword===>1');
            try {
                const res = await commonAjax.get('/search/default',)
                // const res = await Taro.request({
                //     url: '/search/default',
                //     method: 'GET'
                // })
                console.log('getDefaultKeyword===>res', res);
            } catch (error) {
                throw new Error(error)
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
