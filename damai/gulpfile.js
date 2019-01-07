
var gulp = require("gulp");


gulp.task("copy-html",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("html/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\html"));
});


gulp.task("copy-js",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("js/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\js"));
});

gulp.task("copy-img",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("img/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\img"));
});

gulp.task("copy-imgdenglu",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("imgdenglu/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\imgdenglu"));
});

gulp.task("copy-phps",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("phps/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\phps"));
});


gulp.task("copy-ccss",async()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("ccss/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\demo\\ccss"));
});


gulp.task("watchall",async()=>{
    //监视所有文件是否有变化，如果有变化，就执行任务：copy
    gulp.watch("html/*",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-img"));
    gulp.watch('imgdenglu/*.{jpg,png,tmp,gif}',gulp.series("copy-imgdenglu"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    gulp.watch('ccss/*.css',gulp.series("copy-ccss"));
    gulp.watch('phps/*.php',gulp.series("copy-phps"));

});

