"use strict";

module.exports = (res, fn) => {
  res.text = '';
  res.setEncoding('utf8');
  res.on('data', chunk => {
    res.text += chunk;
  });
  res.on('end', fn);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVzIiwiZm4iLCJ0ZXh0Iiwic2V0RW5jb2RpbmciLCJvbiIsImNodW5rIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGUvcGFyc2Vycy90ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHJlcywgZm4pID0+IHtcbiAgcmVzLnRleHQgPSAnJztcbiAgcmVzLnNldEVuY29kaW5nKCd1dGY4Jyk7XG4gIHJlcy5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgIHJlcy50ZXh0ICs9IGNodW5rO1xuICB9KTtcbiAgcmVzLm9uKCdlbmQnLCBmbik7XG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEVBQUUsS0FBSztFQUM1QkQsR0FBRyxDQUFDRSxJQUFJLEdBQUcsRUFBRTtFQUNiRixHQUFHLENBQUNHLFdBQVcsQ0FBQyxNQUFNLENBQUM7RUFDdkJILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLE1BQU0sRUFBR0MsS0FBSyxJQUFLO0lBQ3hCTCxHQUFHLENBQUNFLElBQUksSUFBSUcsS0FBSztFQUNuQixDQUFDLENBQUM7RUFDRkwsR0FBRyxDQUFDSSxFQUFFLENBQUMsS0FBSyxFQUFFSCxFQUFFLENBQUM7QUFDbkIsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==