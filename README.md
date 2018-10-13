# AtCoder Dev for node

## About

なんかパパっとAtCoderをnodeでするやつ   
そんなに深く考えて作ってない   

## How to use

端末ウィンドウを4つ使用します。   

1. コーディング: $SHELL main.js
2. 実行結果: ./watch
3. ビルド: ./build
4. アーカイブ: ./archive

1と2を並べ、3と4を隠して使ってます。

## Description

### ./watch
node-devで監視してるだけです

### ./build
ファイルの変更を検知してmain.jsからoutput.jsにビルドしています。
ビルド結果をコンソールに表示&クリップボードにコピーしています。（常に最新のビルド結果がクリップボードに存在します）

### ./archive
対話式です。問題番号なんかを入力したらビルド前とビルド後がarchives/に保管されます。

## Dependencies

- inotify-tools
- xsel
- node 10
