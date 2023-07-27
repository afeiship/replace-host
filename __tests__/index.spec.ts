import fn from '../src';

describe('api.basic', () => {
  test('1. domain1/domain2 is valid', () => {
    const url1 = 'https://aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807';
    const url2 = 'https://sandbox-aot-report-h5.alo7.com';

    expect(fn(url1, url2)).toBe(
      'https://sandbox-aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807'
    );
  });

  test('2. domain2 is a hostname', () => {
    const url1 = 'https://aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807';
    const url2 = 'sandbox-aot-report-h5.alo7.com';

    expect(fn(url1, url2)).toBe(
      'https://sandbox-aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807'
    );
  });

  test('3. urls is undefind', () => {
    const url1 = 'https://aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807';
    const url2 = undefined;

    expect(fn(url1, url2)).toBe('https://aot-report-h5.alo7.com/offline_asc_mobile?task_id=16807');
  });
});
