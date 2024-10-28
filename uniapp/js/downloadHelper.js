function downloadAndSaveFile(url, title) {
  //   console.log(url);
  try {
    if (url.startsWith('data:')) {
      console.log('保存图片');
      saveBase64ToFile(url, title);
    } else {
      alert("本版本无法保存txt,请前往原项目的网页");
    }
  } catch (e) {
    console.log(e);
    alert('出错:' + e);
  }
}



function saveBase64ToFile(base64, title) {
  const bitmap = new plus.nativeObj.Bitmap();
  bitmap.loadBase64Data(
    base64,
    () => {
      const _filename = `_doc/${title}.png`;
      bitmap.save(
        _filename,
        {},
        (i) => {
          plus.gallery.save(
            _filename,
            () => {
              plus.nativeUI.toast('图片保存成功');
            },
            (e) => {
              plus.nativeUI.toast('图片保存失败');
            },
          );
        },
        (e) => {
          plus.nativeUI.toast('保存失败');
        },
      );
    },
    (e) => {
      console.log('加载Base64图片数据失败：' + JSON.stringify(e));
    },
  );
}
