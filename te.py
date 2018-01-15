# This file was automatically generated by SWIG (http://www.swig.org).
# Version 3.0.12
#
# Do not make changes to this file unless you know what you are doing--modify
# the SWIG interface file instead.

from sys import version_info as _swig_python_version_info
if _swig_python_version_info >= (2, 7, 0):
    def swig_import_helper():
        import importlib
        pkg = __name__.rpartition('.')[0]
        mname = '.'.join((pkg, '_te')).lstrip('.')
        try:
            return importlib.import_module(mname)
        except ImportError:
            return importlib.import_module('_te')
    _te = swig_import_helper()
    del swig_import_helper
elif _swig_python_version_info >= (2, 6, 0):
    def swig_import_helper():
        from os.path import dirname
        import imp
        fp = None
        try:
            fp, pathname, description = imp.find_module('_te', [dirname(__file__)])
        except ImportError:
            import _te
            return _te
        try:
            _mod = imp.load_module('_te', fp, pathname, description)
        finally:
            if fp is not None:
                fp.close()
        return _mod
    _te = swig_import_helper()
    del swig_import_helper
else:
    import _te
del _swig_python_version_info

try:
    _swig_property = property
except NameError:
    pass  # Python < 2.2 doesn't have 'property'.

try:
    import builtins as __builtin__
except ImportError:
    import __builtin__

def _swig_setattr_nondynamic(self, class_type, name, value, static=1):
    if (name == "thisown"):
        return self.this.own(value)
    if (name == "this"):
        if type(value).__name__ == 'SwigPyObject':
            self.__dict__[name] = value
            return
    method = class_type.__swig_setmethods__.get(name, None)
    if method:
        return method(self, value)
    if (not static):
        if _newclass:
            object.__setattr__(self, name, value)
        else:
            self.__dict__[name] = value
    else:
        raise AttributeError("You cannot add attributes to %s" % self)


def _swig_setattr(self, class_type, name, value):
    return _swig_setattr_nondynamic(self, class_type, name, value, 0)


def _swig_getattr(self, class_type, name):
    if (name == "thisown"):
        return self.this.own()
    method = class_type.__swig_getmethods__.get(name, None)
    if method:
        return method(self)
    raise AttributeError("'%s' object has no attribute '%s'" % (class_type.__name__, name))


def _swig_repr(self):
    try:
        strthis = "proxy of " + self.this.__repr__()
    except __builtin__.Exception:
        strthis = ""
    return "<%s.%s; %s >" % (self.__class__.__module__, self.__class__.__name__, strthis,)

try:
    _object = object
    _newclass = 1
except __builtin__.Exception:
    class _object:
        pass
    _newclass = 0

class SwigPyIterator(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, SwigPyIterator, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, SwigPyIterator, name)

    def __init__(self, *args, **kwargs):
        raise AttributeError("No constructor defined - class is abstract")
    __repr__ = _swig_repr
    __swig_destroy__ = _te.delete_SwigPyIterator
    __del__ = lambda self: None

    def value(self):
        return _te.SwigPyIterator_value(self)

    def incr(self, n=1):
        return _te.SwigPyIterator_incr(self, n)

    def decr(self, n=1):
        return _te.SwigPyIterator_decr(self, n)

    def distance(self, x):
        return _te.SwigPyIterator_distance(self, x)

    def equal(self, x):
        return _te.SwigPyIterator_equal(self, x)

    def copy(self):
        return _te.SwigPyIterator_copy(self)

    def next(self):
        return _te.SwigPyIterator_next(self)

    def __next__(self):
        return _te.SwigPyIterator___next__(self)

    def previous(self):
        return _te.SwigPyIterator_previous(self)

    def advance(self, n):
        return _te.SwigPyIterator_advance(self, n)

    def __eq__(self, x):
        return _te.SwigPyIterator___eq__(self, x)

    def __ne__(self, x):
        return _te.SwigPyIterator___ne__(self, x)

    def __iadd__(self, n):
        return _te.SwigPyIterator___iadd__(self, n)

    def __isub__(self, n):
        return _te.SwigPyIterator___isub__(self, n)

    def __add__(self, n):
        return _te.SwigPyIterator___add__(self, n)

    def __sub__(self, *args):
        return _te.SwigPyIterator___sub__(self, *args)
    def __iter__(self):
        return self
SwigPyIterator_swigregister = _te.SwigPyIterator_swigregister
SwigPyIterator_swigregister(SwigPyIterator)

class IntVector(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, IntVector, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, IntVector, name)
    __repr__ = _swig_repr

    def iterator(self):
        return _te.IntVector_iterator(self)
    def __iter__(self):
        return self.iterator()

    def __nonzero__(self):
        return _te.IntVector___nonzero__(self)

    def __bool__(self):
        return _te.IntVector___bool__(self)

    def __len__(self):
        return _te.IntVector___len__(self)

    def __getslice__(self, i, j):
        return _te.IntVector___getslice__(self, i, j)

    def __setslice__(self, *args):
        return _te.IntVector___setslice__(self, *args)

    def __delslice__(self, i, j):
        return _te.IntVector___delslice__(self, i, j)

    def __delitem__(self, *args):
        return _te.IntVector___delitem__(self, *args)

    def __getitem__(self, *args):
        return _te.IntVector___getitem__(self, *args)

    def __setitem__(self, *args):
        return _te.IntVector___setitem__(self, *args)

    def pop(self):
        return _te.IntVector_pop(self)

    def append(self, x):
        return _te.IntVector_append(self, x)

    def empty(self):
        return _te.IntVector_empty(self)

    def size(self):
        return _te.IntVector_size(self)

    def swap(self, v):
        return _te.IntVector_swap(self, v)

    def begin(self):
        return _te.IntVector_begin(self)

    def end(self):
        return _te.IntVector_end(self)

    def rbegin(self):
        return _te.IntVector_rbegin(self)

    def rend(self):
        return _te.IntVector_rend(self)

    def clear(self):
        return _te.IntVector_clear(self)

    def get_allocator(self):
        return _te.IntVector_get_allocator(self)

    def pop_back(self):
        return _te.IntVector_pop_back(self)

    def erase(self, *args):
        return _te.IntVector_erase(self, *args)

    def __init__(self, *args):
        this = _te.new_IntVector(*args)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this

    def push_back(self, x):
        return _te.IntVector_push_back(self, x)

    def front(self):
        return _te.IntVector_front(self)

    def back(self):
        return _te.IntVector_back(self)

    def assign(self, n, x):
        return _te.IntVector_assign(self, n, x)

    def resize(self, *args):
        return _te.IntVector_resize(self, *args)

    def insert(self, *args):
        return _te.IntVector_insert(self, *args)

    def reserve(self, n):
        return _te.IntVector_reserve(self, n)

    def capacity(self):
        return _te.IntVector_capacity(self)
    __swig_destroy__ = _te.delete_IntVector
    __del__ = lambda self: None
IntVector_swigregister = _te.IntVector_swigregister
IntVector_swigregister(IntVector)

class StringVector(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, StringVector, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, StringVector, name)
    __repr__ = _swig_repr

    def iterator(self):
        return _te.StringVector_iterator(self)
    def __iter__(self):
        return self.iterator()

    def __nonzero__(self):
        return _te.StringVector___nonzero__(self)

    def __bool__(self):
        return _te.StringVector___bool__(self)

    def __len__(self):
        return _te.StringVector___len__(self)

    def __getslice__(self, i, j):
        return _te.StringVector___getslice__(self, i, j)

    def __setslice__(self, *args):
        return _te.StringVector___setslice__(self, *args)

    def __delslice__(self, i, j):
        return _te.StringVector___delslice__(self, i, j)

    def __delitem__(self, *args):
        return _te.StringVector___delitem__(self, *args)

    def __getitem__(self, *args):
        return _te.StringVector___getitem__(self, *args)

    def __setitem__(self, *args):
        return _te.StringVector___setitem__(self, *args)

    def pop(self):
        return _te.StringVector_pop(self)

    def append(self, x):
        return _te.StringVector_append(self, x)

    def empty(self):
        return _te.StringVector_empty(self)

    def size(self):
        return _te.StringVector_size(self)

    def swap(self, v):
        return _te.StringVector_swap(self, v)

    def begin(self):
        return _te.StringVector_begin(self)

    def end(self):
        return _te.StringVector_end(self)

    def rbegin(self):
        return _te.StringVector_rbegin(self)

    def rend(self):
        return _te.StringVector_rend(self)

    def clear(self):
        return _te.StringVector_clear(self)

    def get_allocator(self):
        return _te.StringVector_get_allocator(self)

    def pop_back(self):
        return _te.StringVector_pop_back(self)

    def erase(self, *args):
        return _te.StringVector_erase(self, *args)

    def __init__(self, *args):
        this = _te.new_StringVector(*args)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this

    def push_back(self, x):
        return _te.StringVector_push_back(self, x)

    def front(self):
        return _te.StringVector_front(self)

    def back(self):
        return _te.StringVector_back(self)

    def assign(self, n, x):
        return _te.StringVector_assign(self, n, x)

    def resize(self, *args):
        return _te.StringVector_resize(self, *args)

    def insert(self, *args):
        return _te.StringVector_insert(self, *args)

    def reserve(self, n):
        return _te.StringVector_reserve(self, n)

    def capacity(self):
        return _te.StringVector_capacity(self)
    __swig_destroy__ = _te.delete_StringVector
    __del__ = lambda self: None
StringVector_swigregister = _te.StringVector_swigregister
StringVector_swigregister(StringVector)

class intArray(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, intArray, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, intArray, name)
    __repr__ = _swig_repr

    def __init__(self, nelements):
        this = _te.new_intArray(nelements)
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _te.delete_intArray
    __del__ = lambda self: None

    def __getitem__(self, index):
        return _te.intArray___getitem__(self, index)

    def __setitem__(self, index, value):
        return _te.intArray___setitem__(self, index, value)

    def cast(self):
        return _te.intArray_cast(self)
    if _newclass:
        frompointer = staticmethod(_te.intArray_frompointer)
    else:
        frompointer = _te.intArray_frompointer
intArray_swigregister = _te.intArray_swigregister
intArray_swigregister(intArray)

def intArray_frompointer(t):
    return _te.intArray_frompointer(t)
intArray_frompointer = _te.intArray_frompointer

class room(_object):
    __swig_setmethods__ = {}
    __setattr__ = lambda self, name, value: _swig_setattr(self, room, name, value)
    __swig_getmethods__ = {}
    __getattr__ = lambda self, name: _swig_getattr(self, room, name)
    __repr__ = _swig_repr

    def __init__(self):
        this = _te.new_room()
        try:
            self.this.append(this)
        except __builtin__.Exception:
            self.this = this
    __swig_destroy__ = _te.delete_room
    __del__ = lambda self: None

    def get_players_pokers(self, player_id):
        return _te.room_get_players_pokers(self, player_id)

    def shuffle_pokers(self):
        return _te.room_shuffle_pokers(self)
room_swigregister = _te.room_swigregister
room_swigregister(room)

# This file is compatible with both classic and new-style classes.

