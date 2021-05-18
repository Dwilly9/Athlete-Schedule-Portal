//
//  EventRowView.swift
//  AthletePortal
//
//  Created by Daniel Williams on 29/03/2021.
//

import Foundation
import SwiftUI
import RealmSwift
import Combine

struct EventRowView: View {
    // Will be used to help display dates
    @EnvironmentObject var environmentModel: EnvironmentModel
    
    let dateFormatter: DateFormatter = {
        let df = DateFormatter()
        df.dateStyle = .medium
        df.timeStyle = .short
        df.timeZone = .current
        return df
    }()
    
    // The instance of an event that will be referenced when creating the blueprint for how to display event information
    @ObservedRealmObject var event: Event
    
    var body: some View {
        // This view will be the template for how information about a specific event is displayed on the screen. Based on the designs Patrick created,
        //      these should have a small, bold print in the top left corner that says the day of the week, and then the actual date, with a
        //      rounded rectangular box below it displaying the facility and the start and end time like this: "startTime-endTime"
        // This view will be called many times in many other views as we iterate over differently queried schedules
        
        // Replace this with the actual UI code:
        VStack{
            HStack{
                Spacer()
                Text("Practice, located at \(event.facility)")
                Spacer()
            }
            HStack{
                Spacer()
                Text("from \(dateFormatter.string(from: event.startDateTime)) to \(dateFormatter.string(from: event.endDateTime))")
                Spacer()
            }
            Spacer()
        }
    }
}

struct EventRow_Previews: PreviewProvider {
    static var previews: some View {
        ProgressView()
            .preferredColorScheme(.dark)
            .environment(\.realmConfiguration,
                          app.currentUser!.configuration(partitionValue: "masterSchedule"))

    }
}
