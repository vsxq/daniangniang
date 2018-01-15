%module room 
%include "std_string.i"
%include "std_vector.i"
%include "carrays.i"
namespace std
{
    %template(IntVector) vector<int>;
    %template(StringVector) vector<string>;
}

%array_class(int, intArray);

%{
/* Includes the header in the wrapper code */


#include "room.h"

%}

/* Parse the header file to generate wrappers */

%include "room.h"

