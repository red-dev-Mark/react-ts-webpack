const path = require('path');
// import path from 'path'; //Node.js에서 언제든지 가져올 수 있는 전역 모듈 (설치 따로 필요없다.)
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// 빌드 할 때마다 bundile.js의 hash 값이 변경된다.
// 매번 HTML 파일을 수정해 해당 파일을 넣는 것은 무리가 있다.
// HtmlWebpackPlugin은 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인이다.

// const CopyPlugin = require('copy-webpack-plugin');
// 267.5k 용량이 매우 크다..

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve(__dirname, 'public'), //Node.js에서 필요로 하는 절대경로로 작성 (상대경로가 아닌)
    // resolve는 매개변수 두 개를 합쳐주는 역할
    // __dirname: 노드에서 전역적으로 설정 가능한 변수 -> 현재 파일이 있는 그 경로를 지칭(여기서는 루트)
    // filename: 'main.js', //entry와 동일하게

    // : 현재 파일(webpack.config.js)가 있는 곳에 public폴더를 생성하고, 그 안에 app.js파일에 output
    filename: 'js/[name].[contenthash].js',
    // 출력 파일의 이름 형식을 지정합니다. [name]은 entry의 키 값, [contenthash]는 파일 내용 기반의 해시값
    publicPath: '/', //브라우저가 참조할 때 사용할 공용 URL을 지정
    clean: true, // 설정을 바꾸면 기존 파일이 남아있는데, 이를 처리해주는 설정

    // 현재 path, filename은 따로 설정할 필요가 없음
    // 웹팩은 기본으로 dist폴더에 output, entry 지정 파일과 동일한 이름으로 만들어짐 (main.js)
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    // 지정된 확장자를 가진 파일은 import 시 확장자를 생략할 수 있게 합니다.
  },
  module: {
    // 첫 번째 rule: TypeScript, JavaScript, JSX 파일을 babel-loader로 처리
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
          // 지금 webpack.config.js에서 ts-loader가 아닌, babel-loader를 사용 중
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            // .babelrc 파일 내용을 여기 작성
          },
        },
        exclude: /node_modules/,
      },
      // 두 번째 rule: CSS 파일을 처리
      {
        test: /\.s?css$/,
        use: [
          'style-loader', //2) 해석된 내용을 실제 사용할 수 있게 index.html의 style태그에 삽입을 해주는 역할
          'css-loader', //1) js파일에서 css파일을 해석할 수 있는 용도
          // style-loader -> css-loader 순서로 작성
          // css 파일 경로를 잘 설정해야함! (현재 ./ -> ../)
        ],
      },
    ],
  },
  plugins: [
    //HtmlWebpackPlugin: HTML 파일을 생성하고 번들된 JS를 자동으로 삽입합니다.
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    //   new CopyPlugin({
    //     patterns: [{ from: 'static' }], // static 폴더 의미
    //     // CopyPlugin을 통해서, static 폴더 안에 들어있는 내용이 복사가 돼서, dist 폴더로 들어갈 수 있게 만들어 주는 플러그인
    //   }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    //   compress: true,
    // host: 'localhost',
    port: 5731,
    //   open: true,
    //   historyApiFallback: true,
    /*
        static: 정적 파일을 제공할 디렉토리를 지정합니다.
        compress: 압축을 활성화합니다.
        port: 개발 서버가 사용할 포트를 지정합니다.
        open: 개발 서버 실행 시 브라우저를 자동으로 엽니다.
        historyApiFallback: SPA의 클라이언트 라우팅을 위해 모든 경로를 index.html로 리다이렉트합니다.
        */
  },
};
