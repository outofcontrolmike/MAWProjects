# Project Title

Build a Window's Form that allows a user to save information about Fishe's they caught. 

## Example Output

This image will display as your example output. Name the image README.jpg in your project folder.

![Sample Output](README.jpg)

## Analysis Steps

Create a GUI program that show's some knowledge of Window's forms

1) Create an idea of what the program should look like
2) Start writing out the logic of what happens for each control
3)	User Essentially types in each fish they caught and it gets added to a list box
4) User can save the record of fishes as a text file.  Also has an option to load in a txt file as long as it's in the same format as the program expects

### Design

How did you approach your program design? Did you use multiple classes to define various objects?

```
There were a couple classes used along with the Window's form code built behind the scenes.  
One class was used for a string builder to add to list box.  
The other class held the code for the action events for each control on the Window's Form
```

### Testing

A step by step series of examples that you developed to properly test the program. 

Make sure Window's Form has all of the features and that they work correctly.

```
Every option worked correctly, user an save listbox and load a record in.
```

Error handling 

```
Had to make sure user's couldn't have access to some controls while in certain processes of the program
 example -- User shouldn't be able to click in the list box on a catch while they are editing a current item.  
```

End with an example of getting some data out of the system or using it for a little demo

## Notes

One flaw that this program has is that if a user add's a catch to the list box and they don't click on anything that's not an item the program crashes.  

## Do not change content below this line
## Adapted from a README Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
