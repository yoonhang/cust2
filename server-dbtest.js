const mysql = require('mysql'); // mysql2 대신 mysql 사용

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'study'
});

connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 오류:', err);
    return;
    
  }
  console.log('데이터베이스에 성공적으로 연결되었습니다.');

  connection.query('SHOW TABLES', (err, results) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      return;
    }
    console.log('데이터베이스 테이블 목록:', results);
    
  });

  connection.end();
});
