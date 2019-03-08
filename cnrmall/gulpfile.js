var gulp=require("gulp");
var sass=require("gulp-sass");
gulp.task("sass",function(){
	 gulp.src("./css/home.scss")
	    .pipe(sass())
	    .pipe(gulp.dest("./css"))
})

gulp.task("watchSass",function(){
	return gulp.watch("css/home.scss",["sass"])
})



gulp.task("test",function(){
	console.log("rest")
})




