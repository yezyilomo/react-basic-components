## React Basic Components

This is a collection of basic React components which makes code easy to read and write.

## Opinions on Component structure

These components are meant to be highly reusable and they are not styled components(Only components which handle logics, eg conditional rendering, Looping etc).

Components should be simple to use such that they do not impose another complexity to library users.

Components should not introduce other HTML tags(intenally) which users will not be aware of(This might introduce undesirable behaviour to users in  component layout or styling)

Each component should be written on its own File and placed in  'src/lib' direcory

