function range(start, end, step) {
    let result = [];

    const _start = arguments.length === 1 ? 0 : start;
    const _end = arguments.length === 1 ? start : end;
    const _step = arguments.length >= 3  && step !== 0 ? Math.abs(step) : 1;

    if (_start < _end) {
        for (let i = _start; i < _end; i += _step) {
            result.push(step !== 0 ? i : _start);
        }
    }
    if (_start > _end) {
        for (let i = _start; i > _end; i -= _step) {
            result.push(step !== 0 ? i : _start);
        }
    }

    return result;
}
