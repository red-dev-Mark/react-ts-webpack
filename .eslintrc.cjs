module.exports = {
  parser: '@typescript-eslint/parser',
  // TypeScript 코드를 파싱하기 위한 파서를 지정
  // 이 파서는 TypeScript의 특별한 문법을 이해하고 ESLint가 TypeScript 코드를 분석할 수 있게 해줍니다.
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  //  다른 설정들을 확장하여 사용합니다. 여기서는 네 가지 설정을 확장
  // 'eslint:recommended': ESLint의 권장 규칙 세트
  // 'plugin:@typescript-eslint/recommended': TypeScript 관련 권장 규칙 세트
  // 'plugin:react/recommended': React 관련 권장 규칙 세트
  // 'plugin:react-hooks/recommended': React Hooks 관련 권장 규칙 세트

  plugins: ['@typescript-eslint', 'react'],
  //  사용할 추가 플러그인을 지정합니다.
  // '@typescript-eslint': TypeScript 관련 린팅 규칙을 제공합니다.
  // 'react': React 관련 린팅 규칙을 제공합니다.
  rules: {
    // 여기에 custom 룰을 추가할 수 있습니다
    // 여기에 커스텀 규칙을 추가할 수 있습니다.
    // 기본 설정을 덮어쓰거나 새로운 규칙을 추가할 수 있습니다.
  },
  settings: {
    react: {
      version: 'detect',
    },
    // ESLint 플러그인에 대한 추가 설정을 제공합니다.
    // 여기서는 React 플러그인에 대해 React 버전을 자동으로 감지하도록 설정하고 있습니다.
  },
};
