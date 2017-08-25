
import re
from pymongo import MongoClient
from pprint import pprint


client = MongoClient()
db = client.ggsys

# value collection
vcoll = db.value
wcoll = db.words
tcoll = db.thumbs

#r = vcoll.find_one({'title': reg})



#r = find_the_man()


def txtfind(txt):
    pattern = re.compile(txt)
    return wcoll.find({"words": {"$regex": pattern}})


def topList():
    some = vcoll.find({"parentid": {"$exists": False}})
    return some

def populate_words():
    old = list(vcoll.find({}))
    print(len(old))

    for o in old:
        print(o['title'])
        convert_one(o)

import time
def convert_one(obj):
    millis = int(round(time.time() * 1000))
    d = {
            "words": obj['description'],
            "milli": millis,
            "test": True
        }

    if 'thumbs' in obj:
        d["thumbs"] = obj['thumbs']

    r = wcoll.insert(d)
    #print(r)


def rename(old="value", new="thumbs"):
    hasvalue = vcoll.find({"value": {"$exists": True}})
    for i in hasvalue:
        print(i["_id"])
        r = vcoll.update({"_id": i["_id"]}, {"$rename": {"value": "thumbs"}})
        print(r)

    return hasvalue

#hasvs = rename()

#    print(list(hasvalue))



def foo(txt="test"):

    for i in txtfind(txt):
        print(i['words'])


def insert_one(words):
    millis = int(round(time.time() * 1000))
    d = {
            "words": words,
            "milli": millis,
            "test": True,
            "thumbs": {"up":{}, "down":{}}
        }
    r = wcoll.insert(d)
    print(r)

if __name__ == "__main__":
    #write_top_ids()
    print('main')
