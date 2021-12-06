import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import {StaticRouter} from 'react-router-dom';
import App from './App';

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
  //  404가 떠야할 때 404를 띄우지 않고, 서버 사이드 렌더링을 함
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); // 렌더링하고
  res.send(root); // 클라이언트에 결과 응답
};

app.use(serverRender);

// 5000 포트로 서버 가동
app.listen(5000, () => {
  console.log('Running on http://localhost:5000');
})
const html = ReactDOMServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);