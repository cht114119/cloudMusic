<template>
  <view class="seatch-wrap">
    <view
      v-if="isFocus"
      class="left common"
    >
      <image
        v-if="leftType === 1"
        class="icon"
        src="../../assets/images/microphone.png"
      />
      <image
        v-if="leftType === 2"
        class="icon"
        src="../../assets/images/video.png"
      />
    </view>
    <view class="center common">
      <view
        :class="isFocus ? 'placeholder':'placeholder placeholder-focus' "
        @tap="inputFoucs"
      >
        <image
          class="search-ico"
          src="../../assets/images/search.png"
        />
        <input
          v-model="inputVal"
          type="text"
          :focus="!isFocus"
          :placeholder="placeholderText"
        >
      </view>
    </view>
    <view
      v-if="isFocus"
      class="right common"
    >
      <text>right</text>
    </view>
    <view
      v-if="!isFocus"
      class="right common"
      @tap="handleClick"
    >
      <text>取消</text>
    </view>
  </view>
</template>

<script>
import SEARCH_DEFAULT from 'api/index.js'
import post from 'utils/ajax'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'SearchModule',
    props: {
        leftType: { // 1:发现页 显示音频icon  2:视频页 显示视频icon
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            // isFocus: true,
            placeholderText: '哈哈哈',
            inputVal: ''
        }
    },
    computed: {
        ...mapState({
            isFocus: state => state.search.isFocus
        })
    },
    onLoad() {
        this.getDefaultKeyword()
    },
    methods: {
        ...mapMutations({
            setIsFocus: 'search/setIsFocus'
        }),
        handleClick() {
            // this.isFocus = !this.isFocus
            this.setIsFocus(true)
        },
        inputFoucs() {
            this.setIsFocus(false)
            // this.isFocus = false
        },
        async getDefaultKeyword() {
            try {
                const res = await post(SEARCH_DEFAULT)
                if (res) {
                    console.log(res);
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }

}
</script>

<style lang="scss" module>
.seatch-wrap {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    .common {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left {
        width: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        image {
            width: 44px;
            height: 44px;
        }
    }
    .right {
        width: 100px;
        line-height: 70px;
    }
    .center {
        flex: 1;
        position: relative;
        background-color: #e6e6e6;
        border-radius: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .placeholder {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0 35px;
            input {
                padding-left: 10px;
            }
        }
        .search-ico {
            width: 28px;
            height: 28px;
        }
        .placeholder-focus {
            left: 0;
            position: absolute;
            input {
                width: 100%;
            }
        }
    }
}
</style>
