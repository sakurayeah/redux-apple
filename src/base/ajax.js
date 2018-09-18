import $ from 'jquery';

function noop() {}

export default function ajax(opts = {}) {
  const {
    url,
    type = 'GET',
    timeout = 5000,
    data,
    ok = noop,
    fail = noop,
    cm = noop,
  } = opts;
  $.ajax({
    url,
    type,
    dataType: 'json',
    cache: false,
    timeout,
    data,
    success(d) {
      if (d.stat === 'ok') {
        ok(d);
      } else {
        fail({
          d,
          type: 'statFail',
        });
      }
    },
    error(d) {
      fail({
        d,
        type: 'ajaxError',
      });
    },
    complete() {
      cm();
    },
  });
}
