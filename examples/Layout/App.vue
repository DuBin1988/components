<template>
  <div id='app' style="display: -webkit-flex; -webkit-flex-direction: column; height: 100%;">
    <div id='head'>
      这是头部
    </div>
    <div id='body' onresize='console.log("resize")' style='-webkit-flex:1; overflow-y: auto;' a-height>
      <!-- 中间部分 -->
      <div style='display: -webkit-flex; -webkit-flex-direction: column; height: 100%'>
        <div id='bhead'>
          中间部分的头部
        </div>
        <div id='bbody' style='-webkit-flex:1; overflow-y: auto;' a-height>
          <div id='project-page' class='container-fluid' style='height: 100%'>
            <div class="row" style='height: 100%'>
              <div class="col-md-4" style='height: 100%'>
                <div style='display: -webkit-flex; -webkit-flex-direction: column; height: 100%'>
                  <div id='bhead'>
                    左边部分的头部
                  </div>
                  <div id='bbody' style='-webkit-flex:1; overflow-y: auto;' a-height>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                    <p>左边部分中间</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                right
              </div>
            </div>
          </div>        </div>
        <div id='btail'>
          中间部分的尾部
        </div>
      </div>
    </div>
    <div id='foot' >
      这是尾部
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  ready () {
    setInterval(() => {
      for (let e of $('[a-height]', this.$el)) {
        // 高度发生变化了，纠正高度样式，以便后面继承
        if (!e.oldHeight || e.oldHeight !== e.offsetHeight) {
          e.oldHeight = e.offsetHeight
          e.style.height = e.offsetHeight + 'px'
        }
      }
    }, 200)
  }
}
</script>
