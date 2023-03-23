function JCompressor(e,n){if(""==e.value)return!1;null==n&&(n={});var t={MaxSize:20971520,IsImg:!0,IsPreview:!0,PreviewContainer:(e.name||e.id)+"_img",IsCompress:!0,MaxWidth:750,MaxHeight:1280,MaxCompressSize:0,Quality:.8,AllowPngToJpg:!1,FileType:"blob",ChangeBefore:function(){},ChangeAfter:function(){},FileLoad:function(e,n){},ErrorEmpty:function(){},ImgPreview:function(e){!function(e){if(!i.PreviewContainer)return void alert("预览图片元素未找到！");var n="img"==i.PreviewContainer.localName;if(l){if(n)return void alert("多张图片预览时PreviewContainer属性值不能是img标签");i.PreviewContainer.innerHTML="",e.forEach((function(e){var n=document.createElement("img");n.setAttribute("src",e),i.PreviewContainer.appendChild(n)}))}else n?i.PreviewContainer.src=e:alert("单张图片预览时PreviewContainer属性值必须传入img标签")}(e)},NeedDownload:!1,DownloadLoad:function(e){}},i={};if(null==Object.assign)for(var r in t)null==n[r]?i[r]=t[r]:i[r]=n[r];else i=Object.assign(t,n);null!=i.PreviewContainer&&"string"==typeof i.PreviewContainer&&(i.PreviewContainer=document.getElementById(i.PreviewContainer));var o={FileDom:e,ChangeBefore:i.ChangeBefore,ChangeAfter:i.ChangeAfter,ImgPreview:i.ImgPreview,FileLoad:i.FileLoad,ErrorEmpty:i.ErrorEmpty,BlobToBase64:d,Base64ToBlob:m,DownloadLoad:i.DownloadLoad};o.ChangeBefore();var a=e.files,l=e.hasAttribute("multiple");if(0==a.length)return v((function(){console.log("未选中文件")})),!1;if(l)for(var u=[],f=[],s=0;s<a.length;s++)c(a[s]);else c(a[0]);function c(e){if(e.size>i.MaxSize)return v((function(){alert("上传文件大小不能超过"+i.MaxSize+"B，请重新上传！")})),!1;if(!i.IsImg)return!1;if(!/(jp|jpe|pn)g$/.test(e.name))return v((function(){alert("图片格式错误，请重新上传！")})),!1;if(i.IsCompress){if(e.size<i.MaxCompressSize)return g(e),!1;!function(e){function n(e,n,t,r,o){var a=document.createElement("canvas"),l=a.getContext("2d"),u=document.createAttribute("width");u.nodeValue=n;var f=document.createAttribute("height");if(f.nodeValue=t,a.setAttributeNode(u),a.setAttributeNode(f),l.drawImage(e,0,0,n,t),null==a.toBlob){var s=m(a.toDataURL(r,i.Quality));o(s)}else s=a.toBlob((function(e){o(e)}),r,i.Quality)}d(e,(function(t){var r=new Image;r.src=t,r.onload=function(){var t,a,l=this.width,u=this.height;t=l>i.MaxWidth?i.MaxWidth:l,a=u>i.MaxHeight?i.MaxHeight:u;var f=l/i.MaxWidth,s=u/i.MaxHeight;f>s?a=u/l*t:f<s&&(t=l/u*a);var c=e.type;function d(n,t){n.name=t,n.size>=e.size?(g(e),o.compressed=!1):(g(n),o.compressed=!0)}n(r,t,a,c,(function(o){i.AllowPngToJpg&&"image/png"==c&&o.size>i.MaxCompressSize?n(r,t,a,"image/jpeg",(function(n){d(n,e.name.replace(/\.(png|jpg|gif)$/,".jpg"))})):d(o,e.name)}))}}))}(e)}else g(e)}function g(e){function n(e,n){i.IsPreview&&o.ImgPreview(n),i.NeedDownload&&function(e){var n=e instanceof Array;n&&1==e.length&&(e=e[0],n=!1);n?function(e,n){for(var t=new JSZip,i=t.folder("images"),r=0,o=0;o<e.length;o++)!function(){var n=e[o];d(n,(function(t){t=t.replace(/(^\s*)data\:.+base64,/,""),i.file(n.name,t,{base64:!0}),++r==e.length&&a()}))}();function a(){t.generateAsync({type:"blob"}).then((function(e){n(e)}))}}(e,(function(e){o.DownloadLoad((function(){h("images.zip",e)}))})):o.DownloadLoad((function(){h(e.name,e)}))}(e),"base64"==i.FileType?o.FileLoad(n):o.FileLoad(e),o.ChangeAfter()}l?(u.push(e),d(e,(function(e){f.push(e),f.length==a.length&&n(u,f)}))):d(e,(function(t){n(e,t)}))}function d(e,n){var t=new FileReader;t.onload=function(){n(this.result)},t.readAsDataURL(e)}function m(e,n){for(var t=window.atob(e.split(",")[1]),i=new ArrayBuffer(t.length),r=new Uint8Array(i),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return new Blob([i],{type:n})}function v(n){e.value="",i.IsPreview&&i.PreviewContainer&&(l?i.PreviewContainer.innerHTML="":i.PreviewContainer.src=""),n(),o.ErrorEmpty(),o.ChangeAfter()}function h(e,n){saveAs(n,e)}}