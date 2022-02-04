var $ = function(id) {
    return document.getElementById(id);
};

    function runApp(){    
        for (;;) {
            userOption = prompt("Choose a Topic to Learn More About: \n 1. An Overview of Adverse Possession \n 2. Justifications for Adverse Possession \n 3. Elements of Adverse Possession \n 4. Case Study 1: Gurwit v. Kannatzer \n 5. Case Study 2: Van Valkenburgh v. Lutz \n 6. Case Study 3: Fulkerson v. Van Buren \n 0. Exit This Menu \n(enter the number of the topic you wish to study below)");
           
            if (userOption == 1) {

                myExplanation = ("An Overview of Adverse Possession (aka: Squatter's Rights) \n \nDefinition: Adverse possession is a doctrine under which a person in possession of land owned by someone else may acquire valid title to it, so long as certain common law requirements are met, and the adverse possessor is in possession for a sufficient period of time, as defined by a statute of limitations.\n \nSOURCE: Cornell Law School");
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 2 ) {
                
                myExplanation = ("Justifications for Adverse Possession \n \n-Preventing Frivolous Claims: The most widely accepted purpose of adverse possession is to use the notion as a statutue of limitations designed to shield occupants of land from unfounded and old claims to the land. The security of title afforded by this concept has many additional benefits.\n \n-Incentivizes Economical and Agricultural Development: When land occupants have security of title, they are much more likely to pursue economy stimulating practices such as farming, industrialization, etc. that an otherwise indifferent owner would not. \n \n-Correcting Errors in Titles: Adverse possession can serve as a remedy for land owners and occupants who received a title or deed containing erroneous information such as inaccurate property description. Adverse possesion allows their extended possession to serve as proof of ownership. \n \n-Preserving Personhood: This theory takes into consideration the idea that when a person is has used something as their own for a certain length of time, that thing cannot be taken from them with pain and/or frustration of loss. It has become part of their personhood. (e.g. a particular office cubicle an employee has used for five years. Although they never owned it, they have a strong inherent attachment)\n \nSOURCE: John Sprankling & Raymond Coletta, Property: A Contemporary Approach, Fifth Edition (2021).");
                
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 3 ) {
                
                myExplanation = ("Elements of Adverse Possession \n \n-An Overview: In the majority of jurisdictions in the United States, there are six requirements that have to be met in order for an occupant or user of a land to claim title by means of adverse possession; however, some jurisdictions require a seventh. The common six requirements are that the occupant or user must have possession that is: actual, exclusive, open and notorious, adeverse and hostile, continuous, and for the proper statutory time. The less common seventh element is that the occupant pay the land's taxes. \n \n-Actual Possesion: The adverse possession claimant is required to physically use the land in question in a similar or greater manner that any reasonable owner would (this standard varies in consideration of the nature, location, and character of the land). \n \n-Exclusive Possession: The land being claimed cannot be shared with either the rightful owner or the general public. \n \n-Open and Notorious Possession: The occupation and/or use of the land by the claimant cannot be discrete or hidden, but rather must be reasonably apparent and visible upon an inspection by the rightful owner. \n \n-Adverse and Hostile Possession: A claim for adverse possession cannot be made by someone whom the true owner has given permission to occupy and/or use the land. Most jurisdcitions consider the claimants belief as to who is the true owner of the land to be irrelevant when considering this element; however, there are a few jurisdictions that require the claimant believe in good-faith that they are the true legal owner and even fewer jurisdictions that require the claimant know with certainty that they are not the lawful owner. \n \n-Continuous Possession: The occupants or users possession must be continuous to the extent or greater than that of a reasonable owner (again, this standard varies depending on the nature, location, and character of the land).\n \n-For the Proper Statutory Period: Typically, the required statutory time period of occupancy is between 10-20 years in most states but can range from 5-40 years. \n \nSOURCE: John Sprankling & Raymond Coletta, Property: A Contemporary Approach, Fifth Edition (2021).");
                
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 4 ) {
                
                myExplanation = ("Gurwit v. Kannatzer - Court of Appeals of Missouri 788 S.W.2d 293 (1990) \n \n-Rule: \n\n-Overview and Facts: \n\n-Issue: \n\n-Result: Because Gurwit's evidence of possession of the land was sufficient and of at least 10 years time, the court uphelp the trial courts ruling for adverse possession in favor of Gurwit.");
                
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 5 ) {
                
                myExplanation = ("Van Valkenburgh v. Lutz - Court of Appeals of New York 106 N.E.2d 28 (1952) \n \n-Rule: \n\n-Overview and Facts: \n\n-Issue: Can a party claim adverse possession of a land if they lack clear, distinct, and unequivacl\n\n-Result: Because the  evidence of Lutz's possession of the land was sufficient and of at least 15 years time, the court upheld the trial courts ruling that Lutz had acquired the land by way of adverse possession and was the rightful owner.");
                
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 6 ) {
                
                myExplanation = ("Fulkerson v. Van Buren - Court of Appeals of Arkansas 961 S.W.2d 780 (1998) \n \n-Rule: \n\n-Overview and Facts: \n\n-Issue: \n\n-Result: The Court of Appeals overturned the trial court's decision to award adverse possession to Van Buren and ruled in favor of Fulkerson. ");
                
                $("output_string").value = myExplanation;
                end;
            }
            
            else if (userOption == 0 ) {
                
                end;
            }
            
            else if (userOption == "" ) {
               
                end;
            }

            
                var myExplanation = runApp(userOption);
                $("output_string").value = myExplanation;
        } // for loop
       
 } // funtion  