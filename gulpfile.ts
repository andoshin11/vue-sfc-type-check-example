import { src, dest } from 'gulp'
import VueSFCPlugin from 'gulp-vue-sfc'

function defaultTask() {
  return src('./src/**/*.vue')
    .pipe(VueSFCPlugin())
    .pipe(dest('./dist'))
}

export default defaultTask
