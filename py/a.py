
import re
from pymongo import MongoClient
from pprint import pprint


client = MongoClient()
db = client.ggsys

# value collection
coll = db.value

def find_the_man():
    reg = re.compile(r'.+the man was.+')

    r = coll.find_one({'title': reg})

    print(r.keys())
    print('up:')
    print(r['value']['up'].keys())
    print('down:')
    print(r['value']['down'].keys())

    return r


#r = find_the_man()


def find_in_title(hint):
    regstr = r'.+{}.+'.format(hint)

    print('regstr: ', regstr)

    reg = re.compile(regstr)

    r = coll.find_one({'title': reg})

    upnames = list(r['value']['up'].keys())
    upnames.sort()
    downnames = list(r['value']['down'].keys())
    downnames.sort()

    print(r.keys())
    print('up:')
    print(upnames)
    print('down:')
    print(downnames)

    return r

r = find_in_title('gun empty')
