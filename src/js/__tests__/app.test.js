import ErrorRepository from '../app'

describe('ErrorRepository', () => {
  const repository = new ErrorRepository()

  test.each([
    [400, 'Bad Request'],
    [401, 'Unauthorized'],
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
  ])('возвращает описание для кода %i', (code, expected) => {
    expect(repository.translate(code)).toBe(expected)
  })

  test('возвращает значение по умолчанию для неизвестных кодов', () => {
    expect(repository.translate(418)).toBe('Неизвестная ошибка')
  })
});

