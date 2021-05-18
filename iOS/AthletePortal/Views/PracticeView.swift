//
//  PracticeView.swift
//  AthletePortal
//
//  Created by Daniel Williams on 30/04/2021.
//

import Foundation
import SwiftUI
import RealmSwift
import Combine

struct PracticeView: View {
    // Environment Object to help keep track of sports team
    @EnvironmentObject var environmentModel: EnvironmentModel
    
    // Results containing all events from the database - var will be used when creating schedule list
    @ObservedResults(Event.self) var events
    
    // For the navbar portion of the view
    @State var showMenu = false
    
    var body: some View {
        
        // Beginning of Navbar code
        let drag = DragGesture()
            .onEnded {
                if $0.translation.width < -100 {
                    withAnimation {
                        self.showMenu = false
                    }
                }
            }
        
        return NavigationView {
            GeometryReader { geometry in
                ZStack(alignment: .leading) {
                    MainPracticeNavView(showMenu: self.$showMenu)
                        .frame(width: geometry.size.width, height: geometry.size.height)
                        .offset(x: self.showMenu ? geometry.size.width/2 : 0)
                        .disabled(self.showMenu ? true : false)
                    
                    // Specific UI view code here:
                    // Query to modify the db results to fit the "schedule view" format of being in timed order (frontend - please do not touch)
                    // Query throws error when run, needs updated
//                    let predicate = NSPredicate(format: "title == Practice")
//                    let schedule = events.filter(predicate)
                    
                    // This view is what is show when the "Practices" option is selected from the hamburger navbar. It should display only scheduled events that are listed as "practice" and belong to the sport that has already been selected in the SporSelectView
                    // Properly querying this view for a schedule that only lists practices for a specific team will require my help (Dan), just lmk and we
                    //      can work together on it, it should not take very long at all
                    
                    Text("Practice View")
                    
                    // UI code ends, rest of the code is now navbar related
                    if self.showMenu {
                        NavContentView()
                            .frame(width: geometry.size.width/2)
                            .transition(.move(edge: .leading))
                    }
                }
                    .gesture(drag)
            }
                .navigationBarItems(leading: (
                    Button(action: {
                        withAnimation {
                            self.showMenu.toggle()
                        }
                    }) {
                        Image(systemName: "line.horizontal.3")
                            .imageScale(.large)
                    }
                ))
        }
    }
}

struct MainPracticeNavView: View {
    
    @Binding var showMenu: Bool
    
    var body: some View {
        
        Button(action: {
            withAnimation {
               self.showMenu = true
            }
        }) {
        }
        
    }
        
    }
                    
struct PracticeView_Previews: PreviewProvider {
    static var previews: some View {
        PracticeView()
    }
}
