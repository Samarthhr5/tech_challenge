Challenge#1
# terraform is used to create resources for 3-tier environment setup


Challenge#2

The response's JSON includes a region key. We can use the Python requests library to query the endpoint and then use requests's built-in .json method to deserialize the data for filtering. (The requests library is the de-facto standard for making HTTP requests in Python)

If requests isn't currently on the local system, it can be installed via pip:

pip install requests

The region alone is filtered utilizing this function:

>>> region = get_instance_region()
>>> print(region)
us-west-2


